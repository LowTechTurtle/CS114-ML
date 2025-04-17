import numpy as np
import matplotlib.pyplot as plt

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def compute_loss(y, y_pred):
    return -np.mean(y * np.log(y_pred) + (1 - y) * np.log(1 - y_pred))

def logistic_regression_gd(X, y, lr=0.1, epochs=1000):
    m, n = X.shape
    theta = np.zeros((n + 1,))  # Add bias term
    X_bias = np.c_[np.ones((m, 1)), X]  # Add bias column
    
    for _ in range(epochs):
        y_pred = sigmoid(np.dot(X_bias, theta))
        gradient = np.dot(X_bias.T, (y_pred - y)) / m
        theta -= lr * gradient
    
    return theta

def predict(X, theta):
    X_bias = np.c_[np.ones((X.shape[0], 1)), X]  # Add bias column
    return (sigmoid(np.dot(X_bias, theta)) >= 0.5).astype(int)

def predict_proba(X, theta):
    X_bias = np.c_[np.ones((X.shape[0], 1)), X]  # Add bias column
    return sigmoid(np.dot(X_bias, theta))

def generate_data(n):
    X = []
    y = []
    for i in range(n):
        if i <= n / 2:
            X.append(np.random.normal(loc=4, scale=1))
            y.append(0)
        else:
            X.append(np.random.normal(loc=8, scale=1))
            y.append(1)
    return np.array(X).reshape(n, 1), np.array(y)

n_train = 80
n_test = 20
X_train, y_train = generate_data(n_train)
X_test, y_test = generate_data(n_test)

plt.scatter(X_train, y_train, c=y_train)
plt.show()

theta = logistic_regression_gd(X_train, y_train, lr=0.1, epochs=100000)
y_pred = predict(X_test, theta)
print(y_pred)
print(y_test)

plt.scatter(X_train, y_train, c=y_train)
xx = np.linspace(2, 11, 50)
yy = predict_proba(xx.reshape((len(xx), 1)), theta)

plt.plot(xx, yy, 'r-', linewidth=2)
plt.show()
