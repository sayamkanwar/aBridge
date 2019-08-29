from summa.summarizer import summarize
from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/txt/<name>')
def say_hi(name):
    dem = summarize(name)
    # return "<script>localStorage.setItem('message', %s);</script>" % dem
    # print(dem)
    return dem

@app.route('/')
def index():
    return render_template("index.html")
