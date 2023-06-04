from flask_cors import CORS
from flask import Flask, jsonify, request
import json
import numpy as np
import pickle
import pandas as pd
from transformers import AutoTokenizer
from transformers import AutoModelForSequenceClassification
from scipy.special import softmax
import qrcode
from flask_cors import CORS
import werkzeug
import datetime
app = Flask(__name__)
# CORS(app)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


MODEL = f"cardiffnlp/twitter-roberta-base-sentiment"

tokenizer = AutoTokenizer.from_pretrained(MODEL)

model = AutoModelForSequenceClassification.from_pretrained(MODEL)


def generate_qr_code_with_image_url_and_strings(image_url, strings):
    # Combine the image URL and strings
    combined_data = image_url + "\n" + "\n".join(strings)

    # Create a QR code instance
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )

    # Add the combined data to the QR code
    qr.add_data(combined_data)
    qr.make(fit=True)

    # Create an image from the QR code
    qr_image = qr.make_image(fill_color="black", back_color="white")

    # Save the image as a file
    timestamp = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
    qr_image.save(f"./static/{timestamp}qr_code.png")

@app.route('/secure-url', methods=['POST'])
def handle_secure_url():
    data = request.json
    secure_url = data['url']
    string1 = data['string1']
    string2 = data['string2']
    string3 = data['string3']
    print(secure_url)
    generate_qr_code_with_image_url_and_strings(secure_url,[string1,string2,string3])
    return secure_url



@app.route('/generate_qr_code', methods=['POST'])
def generate_qr_code():
    image_url = handle_secure_url
    string1 = request.form['string1']
    string2 = request.form['string2']
    string3 = request.form['string3']

    strings = [string1, string2, string3]

    generate_qr_code_with_image_url_and_strings(image_url, strings)

    return 'QR code generated successfully!'




@app.route("/analyzetweets", methods=["POST"])
def analyzetweets():
    data = request.get_json()
    tweet = data['tweet']

    encoded_text = tokenizer(tweet, return_tensors='pt')
    output = model(**encoded_text)
    ans = output[0][0].detach().numpy()
    ans = softmax(ans)
    ans_list = ans.tolist()
    json_data = json.dumps(ans_list)
    return json_data









if __name__ == "__main__":
    app.run(debug = True)
