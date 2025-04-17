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
    p = 1
    true_beta = [0.0]
    X, y = generate_data(n, p, true_beta)

    # Your code here to compute the p-value
    beta_hat = np.linalg.inv(X.T @ X) @ X.T @ y

    y_hat = X @ beta_hat
    residuals = y - y_hat

    sigma_squared_hat = (residuals.T @ residuals) / (n - p)

    se_beta_hat = np.sqrt(sigma_squared_hat * np.linalg.inv(X.T @ X))

    t_stat = beta_hat[0, 0] / se_beta_hat[0, 0]

    p_value = 2 * (1 - norm.cdf(np.abs(t_stat)))

    return p_value


if __name__ == '__main__':
    naive_p_value = run()

    detect = 0
    reject = 0

    max_iteration = 1000
    list_naive_p_value = []

    for each_iter in range(max_iteration):
        print(each_iter)
        naive_p_value = run()

        list_naive_p_value.append(naive_p_value)

        detect = detect + 1
        if naive_p_value <= 0.05:
            reject = reject + 1

    print('False Positive Rate (FPR):', reject / detect)

    plt.hist(list_naive_p_value)
    plt.show()
