"""Flask app for Cupcakes"""

from flask import Flask, request, jsonify
from models import db, connect_db, Cupcake

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)

app.config['SECRET_KEY'] = 'THIS IS A SECRET'

# GET /api/cupcakes
# GET /api/cupcakes/[cupcake-id]
# POST /api/cupcakes

@app.route('/api/cupcakes')
def get_all_cupcakes():
    """Get data about all cupcakes."""

    cupcakes = Cupcake.query.all()
    serialized = [c.serialized() for c in cupcakes]

    return jsonify(cupcakes=serialized)

@app.route('/api/cupcakes/<int:cupcake_id>')
def get_individual_cupcake(cupcake_id):
    """Get data about a single cupcake.""" 

    cupcake = Cupcake.query.get_or_404(cupcake_id)
    serialized = cupcake.serialize()

    return jsonify(cupcake=serialized)