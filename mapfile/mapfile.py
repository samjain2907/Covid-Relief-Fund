#!/usr/bin/env python
# coding: utf-8

# In[24]:


import pandas as pd
import geopandas as gpd
import requests
import matplotlib.pyplot as plt
import json
import difflib


# In[46]:


url = "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india"

headers = {
    'x-rapidapi-host': "corona-virus-world-and-india-data.p.rapidapi.com",
    'x-rapidapi-key': "1293145f1amsh1fd6f0f82c5a680p1b6215jsn3dc6b068b7ed"
    }

response = requests.request("GET", url, headers=headers).json()

df = pd.DataFrame(response['state_wise']).transpose().iloc[:,1]
df = df.sort_index()
df.index.values[0] = 'Andaman and Nicobar'
df.index.values[7] = 'Dadra and Nagar Haveli'
df.index.values[25] = 'Orissa'
df.index.values[35] = 'Uttaranchal'


# In[47]:


g = gpd.read_file('IND_adm1.shp')
g.to_file("map.json", driver="GeoJSON")


# In[48]:


with open('map.json') as response:
    counties = json.load(response)


# In[49]:


merged_data = g.set_index('NAME_1').join(df)
merged_data = merged_data.iloc[:,8:10]


# In[ ]:





# In[50]:


merged_data['confirmed'] = pd.to_numeric(merged_data['confirmed'])
merged_data = merged_data.sort_values(by='confirmed', ascending=False)


# In[54]:


fig, ax = plt.subplots(1, figsize=(15,10))
ax.axis('off')
ax.set_title('Covid-19 Confirmed Cases across India', fontdict = {'fontsize': '30'})
merged_data.plot(column='confirmed', cmap='Greens', linewidth=0.8, ax=ax, edgecolor='0.8', legend=True)


# In[55]:


fig.savefig('covidmap.png',dpi=100)


# In[ ]:





# In[ ]:




