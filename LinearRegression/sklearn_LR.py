import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from mpl_toolkits.mplot3d import Axes3D

# Import data
data = pd.read_csv('./sample_data/marketing_sales_data.csv')

# Data exploration
print(data.head(5), '\n')
print(data.shape, '\n')
print(data.isna().sum(), '\n')

# Drop rows with missing values
data = data.dropna(axis=0)

# Check model assumptions
sns.pairplot(data)
plt.show()

# Select relevant columns
ols_data = data[['Radio', 'Social Media', 'Sales']]
print(ols_data.head(5))

# Fit model
X = ols_data[['Radio', 'Social Media']]
Y = ols_data['Sales']

model = LinearRegression()
model.fit(X, Y)

# Extract model parameters
intercept = model.intercept_
slope_radio, slope_social_media = model.coef_

print(f'Intercept: {intercept}')
print(f'Coefficient for Radio: {slope_radio}')
print(f'Coefficient for Social Media: {slope_social_media}')

# 3D Plot
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
ax.scatter(ols_data['Radio'], ols_data['Social Media'], ols_data['Sales'], c='blue', marker='o')

# Create a mesh grid for the regression plane
radio_range = np.linspace(ols_data['Radio'].min(), ols_data['Radio'].max(), 10)
social_media_range = np.linspace(ols_data['Social Media'].min(), ols_data['Social Media'].max(), 10)
radio_grid, social_media_grid = np.meshgrid(radio_range, social_media_range)
sales_pred = intercept + slope_radio * radio_grid + slope_social_media * social_media_grid

ax.plot_surface(radio_grid, social_media_grid, sales_pred, color='red', alpha=0.5)
ax.set_xlabel('Radio')
ax.set_ylabel('Social Media')
ax.set_zlabel('Sales')
plt.show()
