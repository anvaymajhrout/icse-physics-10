function loadChapter2Content() {
    document.getElementById('sidebar').style.left = '-250px';
    document.getElementById('burger').checked = false;

    const content = `
        <div class="card2">
            <h2 class="card2-title">Chapter 2: Work, Energy, and Power</h2>
            <p class="small-desc2">
                <b>Work:</b> Work is defined as the product of force and displacement in the direction of the force: <i>W = F × s × cosθ</i>. If the force is perpendicular to the displacement (θ = 90°), no work is done. In cases where the force is parallel to the displacement (θ = 0°), the work done is maximum.
            </p>
            <p class="small-desc2">
                Work can also be calculated as <i>W = mgh</i> when lifting an object vertically against gravity, where <i>m</i> is the mass, <i>g</i> is the acceleration due to gravity, and <i>h</i> is the height.
            </p>
            <p class="small-desc2">
                <b>Energy:</b> Energy is the capacity to perform work. It exists in various forms such as mechanical energy, heat energy, electrical energy, chemical energy, nuclear energy, sound energy, and light energy. The SI unit of energy is the joule (J), but it can also be measured in other units like calories, kilowatt-hours (kWh), and electron volts (eV).
            </p>
            <p class="small-desc2">
                <b>Mechanical Energy:</b> This is the sum of potential energy and kinetic energy. Potential energy <i>(U = mgh)</i> is energy stored due to an object's position in a gravitational field. Kinetic energy <i>(K = ½ mv²)</i> is the energy of an object in motion.
            </p>
            <p class="small-desc2">
                <b>Power:</b> Power is the rate at which work is done or energy is transferred. It is calculated by the formula <i>P = W/t</i>, where <i>W</i> is work and <i>t</i> is time. Power is measured in watts (W), where 1 watt is equivalent to 1 joule per second. Larger units include kilowatts (kW), megawatts (MW), and gigawatts (GW). Another common unit of power is horsepower (hp), where 1 hp = 746 W.
            </p>
            <p class="small-desc2">
                <b>Different Types of Energy:</b> 
                <ul>
                    <li><b>Chemical Energy:</b> Energy stored in chemical bonds and released in chemical reactions.</li>
                    <li><b>Mechanical Energy:</b> Energy due to the motion or position of an object, including both kinetic and potential energy.</li>
                    <li><b>Heat Energy:</b> Also known as thermal energy, it is the energy associated with the temperature of an object.</li>
                    <li><b>Electrical Energy:</b> Energy caused by the movement of electrons, commonly observed in circuits.</li>
                    <li><b>Nuclear Energy:</b> Energy released during nuclear reactions, such as fission or fusion.</li>
                    <li><b>Sound Energy:</b> Energy carried by sound waves, which are vibrations of particles in a medium.</li>
                    <li><b>Light Energy:</b> Also known as radiant energy, it is carried by electromagnetic waves, including visible light.</li>
                </ul>
            </p>
            <p class="small-desc2">
                The conversion of energy from one form to another is a fundamental concept in physics. For instance, in a hydroelectric power plant, gravitational potential energy of water is converted into mechanical energy as the water falls, and this mechanical energy is then converted into electrical energy.
            </p>
        </div>
    `;
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = content;
    contentContainer.className = '';
    contentContainer.classList.add('chapter2-style');
}
