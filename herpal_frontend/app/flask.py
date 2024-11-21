from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np

app = Flask(__name__)
CORS(app)


model = tf.keras.models.load_model("product_recognition.h5")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get image file from the request
        file = request.files['file']
        image = tf.keras.preprocessing.image.load_img(file, target_size=(224, 224))  # Adjust target size to your model's input
        image_array = tf.keras.preprocessing.image.img_to_array(image)
        image_array = np.expand_dims(image_array, axis=0) / 255.0

        # Predict using the model
        prediction = model.predict(image_array)
        response = {"predictions": prediction.tolist()}
        return jsonify(response)
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
