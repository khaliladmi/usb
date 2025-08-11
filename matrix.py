import numpy as np

# Given decoding matrix and array
decoding_matrix = np.array([
    [-103.08333333, -131.25, -81.41666667, -91.58333333, -25.25, -63.5, -60.33333333, -12.75, -151.08333333],
    [-40.5, -52.5, -34.5, -36.5, -10.5, -28., -25., -4.5, -62.5],
    [42.58333333, 54.75, 34.91666667, 39.08333333, 11.75, 26.5, 26.33333333, 7.25, 63.58333333]
])

array = np.array([2, 4, -1, 3, -6, 1, 8, 4, -1])

# Solve for the original message using least squares method
original_message, _, _, _ = np.linalg.lstsq(decoding_matrix.T, array, rcond=None)

# Convert the result to characters
flag = ''.join([chr(int(round(num))) for num in original_message])

# Wrap it in the required format
flag = f"KashiCTF{{{flag}}}"

print(flag)
