import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm

np.random.seed(2025)

def generate_data(n, p, true_beta):
    X = np.random.normal(loc=0, scale=1, size=(n, p))
    true_beta = np.reshape(true_beta, (p, 1))
    noise = np.random.normal(loc=0, scale=1, size=(n, 1))
    y = np.dot(X, true_beta) + noise
    return X, y

def run():
    n = 100
    p = 10  # More than 1 feature
    true_beta = [0.0] * p  # All coefficients are zero, null is true for all features

    X, y = generate_data(n, p, true_beta)

    # Estimate beta
    XTX = np.dot(X.T, X)
    XTXinv = np.linalg.inv(XTX)
    XTXinvXT = np.dot(XTXinv, X.T)
    beta = np.dot(XTXinvXT, y)  # shape: (p, 1)

    # Randomly pick a feature index to test
    j = np.random.randint(0, p)

    # Compute eta_j^T y, where eta_j is the j-th row of XTXinvXT
    eta_j = XTXinvXT[j, :]  # shape: (n,)
    eta_j = eta_j.reshape(1, -1)  # shape: (1, n)

    etaTy = float(np.dot(eta_j, y))  # scalar test statistic (beta_j)

    # Compute standard deviation under null: sqrt(eta_j^T eta_j)
    variance = np.dot(eta_j, eta_j.T)[0][0]
    std_dev = np.sqrt(variance)

    # Compute two-sided naive p-value using standard normal approximation
    cdf = norm.cdf(etaTy, loc=0, scale=std_dev)
    p_value = 2 * min(cdf, 1 - cdf)

    return p_value

if __name__ == '__main__':
    detect = 0
    reject = 0
    max_iteration = 1000
    list_naive_p_value = []

    for each_iter in range(max_iteration):
        print(each_iter)
        naive_p_value = run()
        list_naive_p_value.append(naive_p_value)
        detect += 1
        if naive_p_value <= 0.05:
            reject += 1

    print('False Positive Rate (FPR):', reject / detect)

    plt.hist(list_naive_p_value, bins=30, edgecolor='black')
    plt.title('Distribution of p-values under H0 (true beta = 0)')
    plt.xlabel('p-value')
    plt.ylabel('Frequency')
    plt.show()

