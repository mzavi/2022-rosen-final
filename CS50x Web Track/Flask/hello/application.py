from flask import Flask, render_template, request
import random


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")
    # return render_template("index.html" , name = "Michael")

@app.route("/coinflip")
def coinflip():
    flip = random.randint(0,1)
    land = ""
    if flip == 0:
        land = "tails"
    elif flip == 1:
        land = "heads"
    return render_template("coinflip.html" , coin = land, number = flip)

@app.route("/hello")
def hello():
    name = request.args.get("name")
    if not name:
        return render_template("failure.html")
    return render_template("hello.html" , name=name)