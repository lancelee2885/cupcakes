"""Forms for cupcake app."""

from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import InputRequired, Optional, URL
from wtforms.widgets import TextArea

class CupcakeForm(FlaskForm):
    """Form for adding cupcakes"""

    flavor = StringField("Flavor: ", validators=[InputRequired()])
    size = StringField("Size: ", validators=[InputRequired()])
    rating = StringField("Rating: ", validators=[InputRequired()])
    image = StringField("Image URL: ", validators=[URL(), Optional()])

    
class SearchTermForm(FlaskForm):
    """Form for search team on root"""

    term = StringField("Search: ", validators=[Optional()])