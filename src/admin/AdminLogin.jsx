import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import logo from '../assets/arohitravels.png';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleLogin = async () => {
        // try {
        //     const response = await fetch('http://localhost:3000/admin-login', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({ username, password }),
        //     });
         try {
            const response = await fetch('https://backend-testing-wkft.onrender.com/admin-login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            
            if (response.ok) {
                const { token } = await response.json();
                // Store token in localStorage
                localStorage.setItem('adminToken', token);
                navigate('/dashboard');
            } else {
                const errorData = await response.json();
                setErrors({ general: errorData.message });
            }
        } catch (error) {
            setErrors({ general: 'Server error. Please try again later.' });
        }
    };

    return (
        <div className="login-container">
            <div className="logo">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>
            <div className="login-form">
                <h2>Admin Login</h2>
               
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="input-field"
                        aria-label="Username"
                        autoComplete="off"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input-field"
                        aria-label="Password"
                        autoComplete="off"
                    />
                    <button onClick={handleLogin} type="submit" className="submit-btn" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
            
                {errors.general && (
                    <p style={{ color: 'red', fontSize: '15px', marginTop: '10px' }}>
                        {errors.general}
                    </p>
                )}
            </div>
        </div>
    );
};

export default AdminLogin;
