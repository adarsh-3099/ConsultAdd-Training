from http.client import HTTPResponse
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Department, Employee


def index(request):
    employees = Employee.objects.all()
    departments = Department.objects.all()

    data = {
        "employees":employees,
        "departments":departments
    }
    
    return render(request,'base.html',data)

def add(request):
    if request.method == 'POST':
        
        name = request.POST.get('name')
        manager_name = request.POST.get('mname')
        dept_name = request.POST.get('dept')

        department = Department(dept_name = dept_name)
        department.save()
        employee = Employee(name=name, manager_name= manager_name, dept=department)
        employee.save()

        return redirect('index')

def delete(request,id):
    
    a = Employee.objects.get(pk=id)
    print(a.dept)
    emp_left_of_that_dept = len(Employee.objects.filter(dept = a.dept).all())
    a.delete()
    return redirect('index')

def update(request,id):
    if request.method == 'GET':
        employee = Employee.objects.get(pk=id)
        data = {
            "id":employee.id,
            "name":employee.name,
            "mname":employee.manager_name,
            "dept":employee.dept.dept_name
        }
        print(data)
        return render(request,'edit.html',data)
    else:
        employee = Employee.objects.get(pk=id)

        employee.name = request.POST.get('name')
        employee.manager_name = request.POST.get('mname')
        employee.dept_name = request.POST.get('dept')

        employee.save()
        return redirect('index')
        
    return redirect('index')
