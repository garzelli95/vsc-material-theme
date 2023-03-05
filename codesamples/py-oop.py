class Polygon:
    def sides_no(self):
        self.foo = bar
        pass

class Triangle(Polygon):
    def area(self, foo):
        pass

obj_polygon = Polygon()
obj_triangle = Triangle()
area = obj_triangle.area()
area = area * 2
print(area)

print(type(obj_triangle) == Triangle)   	# true
print(type(obj_triangle) == Polygon)    	# false

print(isinstance(obj_polygon, Polygon)) 	# true
print(isinstance(obj_triangle, Polygon))	# true
