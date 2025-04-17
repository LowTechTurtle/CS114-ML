import numpy as np
from scipy.stats import norm
import matplotlib.pyplot as plt

def run(x, y):
    # generate synthetic data
    n = 50
    m = 100

    mu_X = np.ones((n, 1)) * x
    mu_Y = np.ones((m, 1)) * y

    Sigma_X = np.identity(n)
    Sigma_Y = np.identity(m)

    X = np.random.multivariate_normal(mu_X.flatten(), Sigma_X)
    X = X.reshape((n, 1))

    Y = np.random.multivariate_normal(mu_Y.flatten(), Sigma_Y)
    Y = Y.reshape((m, 1))

    # compute test statistic
    T = np.mean(X) - np.mean(Y)

    # compute standard deviation of the distribution of T
    sigma_T = np.sqrt(1/n + 1/m)

    # distribution of T ~ N(mu_X - mu_Y, sigma_T)

    # compute two-sided p-value
    cdf = norm.cdf(T, loc=0, scale=sigma_T)
    p_value = 2 * min(cdf, 1 - cdf)

    return p_value

alpha = 0.05
count = 0
max_iter = 10000
for i in range(max_iter):
    p_val = run(2, 2)
    if p_val < alpha:
        count += 1

print(f"FP rate: {count/max_iter}")

"""
results = [run(2, 2) for _ in range(1000)]

plt.hist(results, bins=20)
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title("muy_x = 2 and muy_y = 2")
plt.grid(True)
plt.show()


results = [run(2, 4) for _ in range(1000)]
plt.hist(results, bins=20)
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title("muy_x = 2 and muy_y = 4")
plt.grid(True)
plt.show()
"""