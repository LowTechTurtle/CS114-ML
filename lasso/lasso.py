import numpy as np
from sklearn import linear_model


def generate(n, p, true_beta):
    X = np.random.normal(loc=0, scale=1, size=(n, p))
    true_beta = np.reshape(true_beta, (p, 1))

    true_y = np.dot(X, true_beta)
    noise = np.random.normal(loc=0, scale=1, size=(n, 1))
    y = true_y + noise
    return X, y

def check(n, X, y, B, lbd):
    S = (1/(n*lbd)) * np.dot(X.T, (y.reshape(n,) - np.dot(X, B)))

    for i in range(len(B)):
        if B[i] != 0:
            if abs(S[i] + B[i]) > 0.01:
                print(abs(S[i] + B[i]))
                return False
        else:
            if not (-1.01 < S[i] < 1.01):
                print(S[i])
                return False
    return True

n = 100
p = 5
lamda = 0.5
beta_vec = [2, 2, 0, 0, 0]

X, y = generate(n, p, beta_vec)

Lasso = linear_model.Lasso(alpha=lamda, fit_intercept=False, tol=1e-10)
Lasso.fit(X, y)

bh = Lasso.coef_
print(bh)
print(check(n, X, y, bh, lamda))