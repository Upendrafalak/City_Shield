from flask import Flask, render_template, request
import qrcode

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/secure-url', methods=['POST'])
def handle_secure_url():
    data = request.get_json()
    secure_url = data['secureUrl']

@app.route('/generate_qr_code', methods=['POST'])
def generate_qr_code():
    image_url = handle_secure_url
    string1 = request.form['string1']
    string2 = request.form['string2']
    string3 = request.form['string3']

    strings = [string1, string2, string3]

    generate_qr_code_with_image_url_and_strings(image_url, strings)

    return 'QR code generated successfully!'

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
    qr_image.save("static/qr_code.png")

if __name__ == '__main__':
    app.run()