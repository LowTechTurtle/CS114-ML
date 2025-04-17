# Step 1. Import relevant Python libraries and modules.

import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import statsmodels.api as sm

# Import data
data = pd.read_csv('./sample_data/marketing_sales_data.csv')

# Step 2. Data exploration

print(data.head(5), '\n')

# The data includes the following information:
# TV promotion budget (expressed as "Low", "Medium", or "High")
# Radio promotion budget
# Social media promotion budget
# Type of influencer that the promotion is in collaboration with (expressed as "Mega", "Macro", or "Micro", or "Nano") Note: Mega-influencers have over 1 million followers, macro-influencers have 100,000 to 1 million followers, micro-influencers have 10,000 to 100,000 followers, and nano-influencers have fewer than 10,000 followers.
# Sales accrued from the promotion

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
ols_data = data[['Radio','Sales']]
print(ols_data.head(5))

# Fit model
X = ols_data['Radio']
Y = ols_data['Sales']
X = sm.add_constant(X)

OLS = sm.OLS(Y,X)
model = OLS.fit()

print(model.summary())

intercept = model.params.const
slope = model.params.Radio

plt.scatter(ols_data['Radio'], ols_data['Sales'])
plt.plot(ols_data['Radio'], slope*ols_data['Radio'] + intercept, linewidth=3)
plt.show()