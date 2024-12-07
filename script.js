body {
    margin: 0;
    font-family: Arial, sans-serif;
}

header {
    background: url('header.jpg') no-repeat center center/cover;
    color: white;
    padding: 50px 0;
    text-align: center;
}

nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    background-color: #333;
    padding: 10px 0;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
}

section {
    padding: 20px;
}

.process-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.card img {
    width: 100%;
}

footer {
    background-color: #222;
    color: white;
    text-align: center;
    padding: 10px 0;
}
