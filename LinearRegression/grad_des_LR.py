# Step 1. Import relevant Python libraries and modules.

import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# Import data
data = pd.read_csv('./sample_data/marketing_sales_data.csv')

# Step 2. Data exploration

print(data.head(5), '\n')

# Display number of rows, number of columns.
print(data.shape, '\n')

# Check missing values
print(data.isna().sum(), '\n')

# Drop rows which contain missing values
data = data.dropna(axis=0)

# Check model assumptions
sns.pairplot(data)
plt.show()

# Step 3. Model building

# Select relevant columns.
ols_data = data[['Radio', 'Social Media', 'Sales']]
print(ols_data.head(5))

# Fit model using Gradient Descent
X = ols_data[['Radio', 'Social Media']].values
Y = ols_data['Sales'].values.reshape(-1, 1)

# Add a bias term (column of ones)
m = X.shape[0]
X = np.c_[np.ones(m), X]

# Initialize parameters
theta = np.zeros((X.shape[1], 1))
learning_rate = 0.001  # Reduced learning rate
iterations = 100000  # Increased iterations for better convergence

# Gradient Descent
for i in range(iterations):
    gradients = (1/m) * X.T @ (X @ theta - Y)
    theta -= learning_rate * gradients
    
    # Optional: Print loss every 1000 iterations to monitor progress
    if i % 10000 == 0:
        loss = np.mean((X @ theta - Y) ** 2)
        print(f"Iteration {i}: Loss = {loss}")

# Extract model parameters
intercept = theta[0, 0]
slope_radio = theta[1, 0]
slope_social_media = theta[2, 0]

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
plt.title('3D Linear Regression using Gradient Descent')
plt.show()

