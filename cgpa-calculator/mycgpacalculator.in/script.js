// My CGPA Calculator - Main JavaScript File

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to current page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Form validation helper
function validateNumber(input, min, max) {
    const value = parseFloat(input.value);
    if (isNaN(value) || value < min || value > max) {
        return false;
    }
    return true;
}

// Show/hide elements with animation
function toggleElement(elementId, show = true) {
    const element = document.getElementById(elementId);
    if (element) {
        if (show) {
            element.style.display = 'block';
            setTimeout(() => {
                element.style.opacity = '1';
            }, 10);
        } else {
            element.style.opacity = '0';
            setTimeout(() => {
                element.style.display = 'none';
            }, 300);
        }
    }
}

// Copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Print results functionality
function printResults() {
    window.print();
}

// Export results as text
function exportResults(data) {
    const text = JSON.stringify(data, null, 2);
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cgpa-results.txt';
    a.click();
    URL.revokeObjectURL(url);
}

console.log('My CGPA Calculator - Ready!');
