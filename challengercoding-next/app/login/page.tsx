"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');

        const storedPassword = localStorage.getItem(username);
        if (storedPassword && storedPassword === password) {
            setMessage('Login successful!');
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('currentUser', username);
            setTimeout(() => {
                router.push('/learn');
            }, 1000);
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <main>
            <div className="hero">
                <h1>Welcome Back!</h1>
                <p>Log in to your Challenger Coding account</p>
            </div>

            <div className="form-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin} id="loginForm">
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="show-password">
                        <input
                            type="checkbox"
                            id="showPassword"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <label htmlFor="showPassword">Show Password</label>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <button onClick={() => router.push('/signup')} className="secondary-button">Don't Have An Account? Sign Up Here!</button>
                {message && <p id="message" className="message">{message}</p>}
                {error && <p id="error" className="error">{error}</p>}
            </div>
        </main>
    );
}
