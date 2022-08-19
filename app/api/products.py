import imp
from flask import Blueprint, jsonify, request
from app.models.db import db, Product

products_routes = Blueprint('products', __name__)

@products_routes.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    products_list = []
    for product in products:
        products_list.append(product.to_dict())
    return jsonify(products_list)