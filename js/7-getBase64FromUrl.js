// Since getBase64FromUrl function converts an image from a URL to base64 format:
// it creates a new Promise that resolves with the base64 representation of the image.
function getBase64FromUrl(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = this.width;
      canvas.height = this.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(this, 0, 0);

      const dataURL = canvas.toDataURL("image/png");
      resolve(dataURL);
    };
    img.onerror = function () {
      reject(new Error("Failed to load image"));
    };
    img.src = url;
  });
}

// Example usage:
getBase64FromUrl(
  "https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8"
)
  .then(console.log)
  .catch(console.error);

  // Convert an image from a URL to base64 format.
  // When getBase64FromUrl is called with a URL pointing to an image, it returns a Promise.

  // .then(console.log) part chains a callback function to the Promise, 
  // which logs the base64 representation of the image to the console when the Promise is resolved.

  // .catch(console.error) part catches any errors that occur during the image loading process 
  // and logs them to the console.

  // So, the Output is: 
  /* 
  data:image/png;
  base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACeCAYAAABEi7Lg
  AAAAAXNSR0IArs4c6QAAE3VJREFUeF7t3X2UVPV9x/HP787jzj6wsCwI0qCoP
  IgIBGPxqfGoSdNzfEpFTcWoqU9RU221HJMGTWyibZNUjUY8rU1i2upJUklOHuwxCY0RBZIiU
  UHFh5QoiLjCssvu7O483Ht/PXcWTYi7MAMzu+z+3nOOR/6487v3+/p+z9nP3Llzr7HWWvFCAAEEEEA
  AAacEDAHAqX5TLAIIIIAAAiUBAgCDgAACCCCAgIMCBAAHm07JCCCAAAIIEACYAQQQQAABBBwUIAA42HRK
  RgABBBBAgADADCCAAAIIIOCgAAHAwaZTMgIIIIAAAgQAZgABBBBAAAEHBQgADjadkhFAAAEEECAAMAMIIIAAAg
  g4KEAAcLDplIwAAggggAABgBlAAAEEEEDAQQECgINNp2QEEEAAAQQIAMwAAggggAACDgoQABxsOiUjgAACCCBAAGA
  */