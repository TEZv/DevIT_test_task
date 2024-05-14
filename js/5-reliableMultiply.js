// Since reliableMultiply function is designed to reliably perform multiplication 
// by handling potential exceptions thrown by primitiveMultiply, 
// it uses a try-catch block to manage the process.
function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (error) {
    if (error instanceof NotificationException) {
      return reliableMultiply(a, b);
    } else {
      throw error;
    }
  }
}

// Example usage:
function NotificationException() {}
// Since NotificationException is a custom exception class, 
// it is indicating a non-critical error during multiplication.
function ErrorException() {}
// Since ErrorException is a custom exception class, 
// it is indicating a critical error during multiplication.
function primitiveMultiply(a, b) {
    // Since primitiveMultiply generates a random number (rand) and 
    // throws either ErrorException or NotificationException based on certain conditions.
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}

console.log(reliableMultiply(8, 8)); // 64
// Since it uses a try-catch block to catch any exceptions thrown during multiplication.
// This function attempts to perform multiplication of 
// two numbers a and b by calling primitiveMultiply.

// If a NotificationException is caught, 
// it recursively calls itself (reliableMultiply) to retry the multiplication.

// Output is: 64
