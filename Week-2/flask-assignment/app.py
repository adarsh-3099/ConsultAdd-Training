from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class Employee(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(20))
    dept = db.Column(db.String(20))
    dept_name = db.Column(db.String(20))
    manageer_name = db.Column(db.String(20))

class Department(db.Model):
    id = db.Column(db.Integer)
    dept = db.Column(db.String(20), db.ForeignKey(Employee.dept), primary_key = True)
    dept_name = db.Column(db.String(20))
    manageer_name = db.Column(db.String(20))

@app.route("/", methods = ["POST", "GET"])
def index():
    if request.method == 'POST':
        name = request.form["name"]
        dept = request.form["dept"]
        dept_name = request.form["dept_name"]
        manager_name = request.form["manager_name"]
        new_Emp = Employee(name=name, dept=dept, dept_name=dept_name, manageer_name=manager_name)
        new_Dept = Department(dept=dept, dept_name=dept_name, manageer_name=manager_name)

        try:
            db.session.add(new_Emp)
            db.session.add(new_Dept)
            db.session.commit()
            return redirect("/")
        except:
            return "There was an issue"


    else:
        employees = Employee.query.order_by(Employee.id).all()
        department = Department.query.order_by(Department.dept).distinct()
        #print(employees)
        return render_template("index.html", employees = employees, department = department)


@app.route('/delete/<int:id>')
def delete(id):
    emp_to_del = Employee.query.get_or_404(id)
    
    emp_left_of_that_dept = len(Employee.query.filter(Employee.dept == emp_to_del.dept).all())

    if emp_left_of_that_dept == 1:
        dept_del = Department.query.get_or_404(emp_to_del.dept)

    try:
        if emp_left_of_that_dept > 1:
            db.session.delete(emp_to_del)
            db.session.commit()
            return redirect("/")
        else:
            db.session.delete(emp_to_del)
            db.session.delete(dept_del)
            db.session.commit()
            return redirect("/")

    except:
        return "Something Went Wrong"


@app.route('/update/<int:id>', methods = ["POST", "GET"])
def update(id):
    emp = Employee.query.get_or_404(id)

    if request.method == 'POST':
        emp.name = request.form["name"]
        emp.dept = request.form["dept"]
        emp.dept_name = request.form["dept_name"]
        emp.manageer_name = request.form["manager_name"]

        try:
            db.session.commit()
            return redirect("/")
        except:
            return "A Problem Arised"

    else:
        return render_template("update.html", emp = emp)


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
