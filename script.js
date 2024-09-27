/* تنسيق عام */
body {
    background-color: #000;
    color: #0f0;
    font-family: 'Courier New', Courier, monospace;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

.skills-section {
    padding: 4rem 1rem;
    text-align: center;
}

.section-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #0f0;
}

.skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.skill {
    background-color: #111;
    border: 2px solid #0f0;
    border-radius: 10px;
    padding: 2rem;
    width: 150px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill i {
    font-size: 3rem;
    color: #0f0;
    transition: color 0.3s ease;
}

.skill p {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #fff;
}

/* تأثير hover على المهارات */
.skill:hover {
    transform: translateY(-10px);
    box-shadow: 0px 4px 20px rgba(0, 255, 133, 0.5);
}

.skill:hover i {
    color: #00ff85;
}

/* تنسيق الأيقونات */
.skill i.fab, .skill i.fas {
    animation: spin 4s infinite linear;
}

/* دوران الأيقونات */
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
