import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import statsmodels.api as sm

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
X = sm.add_constant(X)

OLS = sm.OLS(Y, X)
model = OLS.fit()

print(model.summary())

# Extract model parameters
intercept = model.params.const
slope_radio = model.params.Radio
slope_social_media = model.params['Social Media']

# 3D Plot
from mpl_toolkits.mplot3d import Axes3D
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

