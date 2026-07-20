// Derived from v2 java_week6.html (notes content), as v2 java_lesson6.html was empty (0 bytes).
// Lesson covers Objects, Wrapper Classes, Object Methods, and Object Comparison.
export const javaLesson6 = [
    {
        title: "Lesson Overview",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Java Guided Tutorials - Objects and Wrapper Classes</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h2 class="text-2xl font-semibold mb-4 text-gray-800">What You'll Learn</h2>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Welcome to our Java Objects and Wrapper Classes Tutorial! This lesson explores how to create and work with objects — instances of classes that model real-world entities — and how wrapper classes let you use primitive data types in object-oriented contexts.
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 class="text-xl font-semibold mb-2 text-gray-800">Lesson Overview:</h3>
                    <ul class="list-disc list-inside text-gray-700">
                        <li><strong>Object Basics:</strong> Creating objects with the <code class="bg-gray-100 p-1 rounded">new</code> keyword, understanding state and behavior, and the <code class="bg-gray-100 p-1 rounded">this</code> keyword.</li>
                        <li><strong>Wrapper Classes:</strong> Wrapping primitives into objects with <code class="bg-gray-100 p-1 rounded">Integer</code>, <code class="bg-gray-100 p-1 rounded">Double</code>, <code class="bg-gray-100 p-1 rounded">Boolean</code>, and more, plus autoboxing and unboxing.</li>
                        <li><strong>Object Methods:</strong> Instance methods vs static methods, accessors (getters) and mutators (setters), and overriding <code class="bg-gray-100 p-1 rounded">toString()</code>.</li>
                        <li><strong>Object Comparison:</strong> Reference equality with <code class="bg-gray-100 p-1 rounded">==</code> vs content equality with <code class="bg-gray-100 p-1 rounded">.equals()</code>, and the <code class="bg-gray-100 p-1 rounded">hashCode()</code> contract.</li>
                    </ul>
                </div>
                <p class="text-lg leading-relaxed text-gray-700 mt-4">
                    By the end of this lesson, you'll be comfortable creating objects, using wrapper classes, writing instance methods, and comparing objects correctly — skills essential for real-world Java development, collections, and generics.
                </p>
            </div>
        `,
        showCompiler: false,
        showAutograder: false
    },
    {
        title: "Object Basics",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">1. Object Basics</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">What is an Object?</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    In Java, an <strong>object</strong> is an instance of a class. Think of a class as a blueprint and the object as the actual thing built from that blueprint. Objects have <strong>state</strong> (attributes/fields) and <strong>behavior</strong> (methods). You create objects using the <code class="bg-gray-100 p-1 rounded">new</code> keyword, which allocates memory and calls a constructor.
                </p>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Creating an Object:</strong></p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>ClassName objectName = new ClassName();</code></pre>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Key Components of an Object:</strong></p>
                <ul class="list-disc list-inside text-gray-700 mb-4">
                    <li><strong>State (Instance Variables):</strong> Fields that hold the object's data.</li>
                    <li><strong>Behavior (Instance Methods):</strong> Methods that operate on the object's data.</li>
                    <li><strong>Identity:</strong> Each object has a unique memory address.</li>
                </ul>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>The <code class="bg-gray-100 p-1 rounded">this</code> Keyword:</strong></p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Inside an instance method, <code class="bg-gray-100 p-1 rounded">this</code> refers to the current object. It is often used to distinguish instance variables from constructor or method parameters with the same name.
                </p>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Example: Car Class</strong></p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class Car {
    // Instance variables (state)
    String brand;
    String model;
    int year;

    // Constructor
    public Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Instance method (behavior)
    public void startEngine() {
        System.out.println("The " + this.brand + " " + this.model + " is starting...");
    }

    public static void main(String[] args) {
        Car myCar = new Car("Toyota", "Corolla", 2022);
        myCar.startEngine();
    }
}</code></pre>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Key Points:</h4>
                    <ul class="list-disc list-inside text-gray-700">
                        <li>Objects are created with <code class="bg-gray-100 p-1 rounded">new</code> followed by a constructor call.</li>
                        <li>Instance variables define the object's state; instance methods define its behavior.</li>
                        <li>The <code class="bg-gray-100 p-1 rounded">this</code> keyword refers to the current object and disambiguates fields from parameters.</li>
                        <li>Each object gets its own copy of instance variables.</li>
                    </ul>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "The Toyota Corolla is starting...",
        initialCode: `public class Car {
    // Step 1: Declare instance variables: brand (String), model (String), year (int)

    // Step 2: Create a constructor that takes brand, model, and year
    //         Use 'this' to assign the parameters to the instance variables

    // Step 3: Create an instance method startEngine() that prints
    //         "The " + brand + " " + model + " is starting..."

    public static void main(String[] args) {
        // Step 4: Create a Car object with brand "Toyota", model "Corolla", year 2022
        // Step 5: Call the startEngine() method on your object
    }
}`
    },
    {
        title: "Wrapper Classes",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">2. Wrapper Classes</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">What are Wrapper Classes?</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    <strong>Wrapper classes</strong> are Java classes that "wrap" primitive data types into objects. They are essential because many Java features — like collections (<code class="bg-gray-100 p-1 rounded">ArrayList</code>, <code class="bg-gray-100 p-1 rounded">HashMap</code>) and generics — work only with objects, not primitives. Each primitive type has a corresponding wrapper class.
                </p>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Primitive to Wrapper Mapping:</strong></p>
                <div class="overflow-x-auto mb-4">
                    <table class="min-w-full bg-white border border-gray-300 rounded-lg">
                        <thead>
                            <tr class="bg-gray-100">
                                <th class="px-4 py-2 border-b text-left text-gray-700 font-semibold">Primitive Type</th>
                                <th class="px-4 py-2 border-b text-left text-gray-700 font-semibold">Wrapper Class</th>
                                <th class="px-4 py-2 border-b text-left text-gray-700 font-semibold">Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b">
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">int</code></td>
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">Integer</code></td>
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">Integer i = 5;</code></td>
                            </tr>
                            <tr class="border-b bg-gray-50">
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">double</code></td>
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">Double</code></td>
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">Double d = 3.14;</code></td>
                            </tr>
                            <tr class="border-b">
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">boolean</code></td>
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">Boolean</code></td>
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">Boolean b = true;</code></td>
                            </tr>
                            <tr class="border-b bg-gray-50">
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">char</code></td>
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">Character</code></td>
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">Character c = 'A';</code></td>
                            </tr>
                            <tr class="border-b">
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">long</code></td>
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">Long</code></td>
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">Long l = 100L;</code></td>
                            </tr>
                            <tr class="bg-gray-50">
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">float</code></td>
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">Float</code></td>
                                <td class="px-4 py-2 text-gray-700"><code class="bg-gray-100 p-1 rounded">Float f = 2.5f;</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Autoboxing and Unboxing:</strong></p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    <strong>Autoboxing</strong> is the automatic conversion of a primitive type to its corresponding wrapper class. <strong>Unboxing</strong> is the reverse — converting a wrapper object back to its primitive. Java handles these conversions automatically.
                </p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>// Autoboxing: int -> Integer
int num = 42;
Integer wrapped = num;  // Java auto-boxes

// Unboxing: Integer -> int
Integer value = 100;
int primitive = value;  // Java auto-unboxes</code></pre>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Useful Wrapper Methods:</strong></p>
                <ul class="list-disc list-inside text-gray-700 mb-4">
                    <li><code class="bg-gray-100 p-1 rounded">Integer.parseInt("123")</code> — converts a String to an int</li>
                    <li><code class="bg-gray-100 p-1 rounded">Integer.valueOf(123)</code> — returns an Integer object</li>
                    <li><code class="bg-gray-100 p-1 rounded">Integer.MAX_VALUE</code> — the maximum int value (2147483647)</li>
                    <li><code class="bg-gray-100 p-1 rounded">String.valueOf(123)</code> — converts any value to a String</li>
                </ul>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Example: WrapperExample</strong></p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class WrapperExample {
    public static void main(String[] args) {
        // Parsing a string to an integer
        String numberStr = "123";
        int parsed = Integer.parseInt(numberStr);
        System.out.println("Parsed number: " + parsed);

        // Using Integer.MAX_VALUE
        System.out.println("Maximum value of Integer: " + Integer.MAX_VALUE);

        // Autoboxing example
        Integer a = 42;        // autoboxing
        int b = a;             // unboxing
        System.out.println("Autoboxed: " + a + ", Unboxed: " + b);
    }
}</code></pre>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Key Points:</h4>
                    <ul class="list-disc list-inside text-gray-700">
                        <li>Wrapper classes let you use primitives where objects are required (e.g., in collections).</li>
                        <li>Autoboxing and unboxing happen automatically — you rarely need to manually wrap/unwrap.</li>
                        <li>Wrapper classes provide useful constants (<code class="bg-gray-100 p-1 rounded">MAX_VALUE</code>, <code class="bg-gray-100 p-1 rounded">MIN_VALUE</code>) and utility methods (<code class="bg-gray-100 p-1 rounded">parseInt</code>, <code class="bg-gray-100 p-1 rounded">valueOf</code>).</li>
                    </ul>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Parsed number: 123\nMaximum value of Integer: 2147483647",
        initialCode: `public class WrapperExample {
    public static void main(String[] args) {
        // Step 1: Declare a String variable "numberStr" with value "123"
        // Step 2: Parse it to an int using Integer.parseInt() and print it
        // Step 3: Print the maximum value of Integer using Integer.MAX_VALUE
    }
}`
    },
    {
        title: "Object Methods",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">3. Object Methods</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">Instance Methods vs Static Methods</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    <strong>Instance methods</strong> belong to an object and can access instance variables. They are called on a specific object. <strong>Static methods</strong> belong to the class itself and cannot access instance variables directly. This section focuses on instance methods.
                </p>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Accessors and Mutators (Getters and Setters):</strong></p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    <strong>Accessors (getters)</strong> retrieve the value of a private field. <strong>Mutators (setters)</strong> update the value of a private field, often with validation. These methods follow the JavaBeans naming convention.
                </p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class Person {
    private String name;

    // Accessor (getter)
    public String getName() {
        return name;
    }

    // Mutator (setter)
    public void setName(String name) {
        this.name = name;
    }
}</code></pre>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Method Overriding and toString():</strong></p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    <strong>Method overriding</strong> allows a subclass to provide a specific implementation of a method already defined in its superclass. A common method to override is <code class="bg-gray-100 p-1 rounded">toString()</code>, which returns a string representation of an object.
                </p>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Example: Rectangle Class</strong></p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class Rectangle {
    private double length;
    private double width;

    // Constructor
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    // Accessors
    public double getLength() { return length; }
    public double getWidth() { return width; }

    // Mutators
    public void setLength(double length) { this.length = length; }
    public void setWidth(double width) { this.width = width; }

    // Instance method: calculate area
    public double calculateArea() {
        return length * width;
    }

    // Instance method: calculate perimeter
    public double calculatePerimeter() {
        return 2 * (length + width);
    }

    // Instance method: check if square
    public boolean isSquare() {
        return length == width;
    }

    // Override toString()
    @Override
    public String toString() {
        return "Rectangle[" + length + " x " + width + "]";
    }

    public static void main(String[] args) {
        Rectangle rect = new Rectangle(5.0, 3.0);
        System.out.println("Area: " + rect.calculateArea());
        System.out.println("Perimeter: " + rect.calculatePerimeter());
        System.out.println("Is Square? " + rect.isSquare());
    }
}</code></pre>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Key Points:</h4>
                    <ul class="list-disc list-inside text-gray-700">
                        <li>Instance methods operate on an object's state; they are called on an instance, not on the class.</li>
                        <li>Getters and setters follow the <code class="bg-gray-100 p-1 rounded">getFieldName()</code> / <code class="bg-gray-100 p-1 rounded">setFieldName()</code> naming convention.</li>
                        <li>Override <code class="bg-gray-100 p-1 rounded">toString()</code> to provide a meaningful text representation of your objects.</li>
                        <li>Method overriding lets subclasses customize inherited behavior.</li>
                    </ul>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Area: 15.0\nPerimeter: 16.0\nIs Square? false",
        initialCode: `public class Rectangle {
    // Step 1: Declare private instance variables: length (double), width (double)

    // Step 2: Create a constructor that takes length and width

    // Step 3: Create getter and setter methods for length and width

    // Step 4: Create an instance method calculateArea() that returns length * width

    // Step 5: Create an instance method calculatePerimeter() that returns 2 * (length + width)

    // Step 6: Create an instance method isSquare() that returns true if length == width

    public static void main(String[] args) {
        // Step 7: Create a Rectangle with length 5.0 and width 3.0
        // Step 8: Print the area, perimeter, and whether it's a square
    }
}`
    },
    {
        title: "Object Comparison",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">4. Object Comparison</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">Reference Equality vs Content Equality</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    In Java, there are two ways to compare objects:
                </p>
                <ul class="list-disc list-inside text-gray-700 mb-4">
                    <li><strong><code class="bg-gray-100 p-1 rounded">==</code> (Reference Equality):</strong> Checks whether two references point to the <em>same memory location</em> — i.e., they are the exact same object.</li>
                    <li><strong><code class="bg-gray-100 p-1 rounded">.equals()</code> (Content Equality):</strong> Checks whether two objects have the <em>same logical content</em>. By default, <code class="bg-gray-100 p-1 rounded">equals()</code> behaves like <code class="bg-gray-100 p-1 rounded">==</code>, but you can override it to define custom equality logic.</li>
                </ul>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>The hashCode() Contract:</strong></p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Whenever you override <code class="bg-gray-100 p-1 rounded">equals()</code>, you must also override <code class="bg-gray-100 p-1 rounded">hashCode()</code> to maintain the general contract: equal objects <strong>must</strong> have equal hash codes. This is critical for objects used in hash-based collections like <code class="bg-gray-100 p-1 rounded">HashMap</code> or <code class="bg-gray-100 p-1 rounded">HashSet</code>.
                </p>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Example: Person Class with equals() and hashCode()</strong></p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>import java.util.Objects;

public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Override equals() to compare name and age
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Person person = (Person) obj;
        return age == person.age && Objects.equals(name, person.name);
    }

    // Override hashCode() to match equals()
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }

    public static void main(String[] args) {
        Person p1 = new Person("Alice", 25);
        Person p2 = new Person("Alice", 25);
        Person p3 = p1;  // p3 references the same object as p1

        // Reference equality
        System.out.println("p1 == p2: " + (p1 == p2));
        System.out.println("p1.equals(p2): " + p1.equals(p2));
        System.out.println("p1 == p3: " + (p1 == p3));
    }
}</code></pre>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Best Practices:</h4>
                    <ul class="list-disc list-inside text-gray-700">
                        <li>Always override <strong>both</strong> <code class="bg-gray-100 p-1 rounded">equals()</code> and <code class="bg-gray-100 p-1 rounded">hashCode()</code> — never one without the other.</li>
                        <li>Use <code class="bg-gray-100 p-1 rounded">Objects.equals()</code> for null-safe field comparisons in your <code class="bg-gray-100 p-1 rounded">equals()</code> method.</li>
                        <li>Use <code class="bg-gray-100 p-1 rounded">Objects.hash()</code> for a simple, correct <code class="bg-gray-100 p-1 rounded">hashCode()</code> implementation.</li>
                        <li>Use <code class="bg-gray-100 p-1 rounded">==</code> for checking if two references point to the same object; use <code class="bg-gray-100 p-1 rounded">.equals()</code> for logical comparison.</li>
                    </ul>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "p1 == p2: false\np1.equals(p2): true\np1 == p3: true",
        initialCode: `import java.util.Objects;

public class Person {
    private String name;
    private int age;

    // Step 1: Create a constructor that takes name and age

    // Step 2: Override equals() to compare both name and age
    //         Use Objects.equals() for null-safe comparison

    // Step 3: Override hashCode() using Objects.hash()

    public static void main(String[] args) {
        // Step 4: Create two Person objects with name "Alice" and age 25
        // Step 5: Create a third reference that points to the first object
        // Step 6: Print results of == and .equals() comparisons
    }
}`
    }
];
