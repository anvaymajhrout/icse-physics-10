document.getElementById('burger').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('sidebar').style.left = '0';
    } else {
        document.getElementById('sidebar').style.left = '-250px';
    }
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('sidebar').style.left = '-250px';
    document.getElementById('burger').checked = false;
});

document.getElementById('chapter1').addEventListener('click', function() {
    
    document.getElementById('sidebar').style.left = '-250px';
    document.getElementById('burger').checked = false;

    
    const content = `
        <div class="card">
            <h2 class="card-title">Chapter 1: Force</h2>
            <p class="small-desc">
                <b>Force</b> is any interaction that, when unopposed, will change the motion of an object. Forces can cause an object to accelerate, decelerate, remain in place, or change shape. The SI unit of force is the <b>newton (N)</b>.
            </p>
            <p class="small-desc">
                <b>Types of Forces:</b> Forces are categorized into two main types:
                <ul>
                    <li><b>Contact Forces:</b> These forces require physical contact between objects. Examples include:
                        <ul>
                            <li><b>Frictional Force:</b> The force that opposes motion between two surfaces in contact.</li>
                            <li><b>Tension Force:</b> The force that is transmitted through a string, rope, or wire when it is pulled tight by forces acting from opposite ends.</li>
                            <li><b>Normal Force:</b> The support force exerted upon an object in contact with another stable object, like a book on a table.</li>
                        </ul>
                    </li>
                    <li><b>Non-Contact Forces:</b> These forces act over a distance without physical contact. Examples include:
                        <ul>
                            <li><b>Gravitational Force:</b> The force of attraction between two masses. For example, the Earth's gravitational pull on objects.</li>
                            <li><b>Magnetic Force:</b> The attraction or repulsion between magnetic poles.</li>
                            <li><b>Electrostatic Force:</b> The force between charged particles.</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p class="small-desc">
                <b>Moment of a Force (Torque):</b> Torque is the turning effect produced by a force acting at a distance from the pivot point. It is calculated by the formula:
                <i>Torque (τ) = Force (F) × Distance (r)</i>, where <i>r</i> is the perpendicular distance from the pivot to the line of action of the force. The SI unit of torque is <b>newton-meter (N·m)</b>.
            </p>
            <p class="small-desc">
                Example: Opening a door involves applying force at the handle, which is far from the hinges (the pivot point). The larger the distance from the pivot, the easier it is to open the door.
            </p>
            <p class="small-desc">
                <b>Conditions for Equilibrium:</b> A body is said to be in equilibrium when it is either at rest or moving with a constant velocity, meaning the net force and net torque acting on it are zero. There are two conditions:
                <ul>
                    <li><b>Translational Equilibrium:</b> The sum of all forces acting on the body is zero, so it does not move.</li>
                    <li><b>Rotational Equilibrium:</b> The sum of all torques acting on the body is zero, so it does not rotate.</li>
                </ul>
            </p>
            <p class="small-desc">
                <b>Principle of Moments:</b> For a body in rotational equilibrium, the sum of the clockwise moments about any point is equal to the sum of the counterclockwise moments about that point. This principle is used to solve problems involving seesaws, levers, and other rotating systems.
            </p>
            <p class="small-desc">
                <b>Center of Gravity:</b> The center of gravity of a body is the point where its entire weight appears to act, irrespective of its orientation. For regularly shaped objects like a uniform rod or a square, the center of gravity is at the geometric center. For irregular objects, it is determined by balancing the object.
            </p>
            <p class="small-desc">
                Example: When a uniform meter stick is balanced at its midpoint, it is in equilibrium, with its center of gravity at the midpoint.
            </p>
            <p class="small-desc">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl1rBjtMHwRcqMqzdfumS8p_hr7AW9p1IbYHLLCL7zBG1TKJlDCFH9x5e0-x1pLUe4T-hgUwCVEswjzdojUJJbiyL6SFC4JcZiy5R1CSQpbNckG4RA92POwBmc7eaxKOfVLdJgL90aQxc/d/Moment+of+a+Force.PNG" alt="Diagram illustrating moment of force and equilibrium" style="max-width: 100%; height: auto; border-radius: 8px;">
            </p>
            <p class="small-desc">
                Understanding these concepts of force, torque, and equilibrium is crucial for analyzing the mechanics of physical systems, such as in engineering and everyday life applications like the design of bridges, vehicles, and machinery.
            </p>
        </div>
    `;

    
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = content;
    contentContainer.style.display = 'flex';
    contentContainer.style.justifyContent = 'center';
    contentContainer.style.alignItems = 'center';
    contentContainer.style.height = '100vh';
    contentContainer.style.overflowY = 'scroll';
});
