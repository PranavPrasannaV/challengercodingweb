"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signup() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (localStorage.getItem(username)) {
            setError("Username already taken.");
            return;
        }

        localStorage.setItem(username, password);

        let userCount = parseInt(localStorage.getItem('userCount') || '0', 10);
        userCount++;
        localStorage.setItem('userCount', userCount.toString());

        setMessage(`Sign up successful!`);
        // Optional: Redirect to login or auto-login
        setTimeout(() => {
            router.push('/login');
        }, 1000);
    };

    return (
        <main>
            <div className="hero">
                <h1>Signing Up</h1>
                <p>Create your free account today!</p>
            </div>

            <div className="form-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup} id="signupForm">
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
                    <button type="submit">Sign Up</button>
                </form>
                <button onClick={() => router.push('/')} className="secondary-button">Back to Homepage</button>
                <button onClick={() => router.push('/login')} className="secondary-button">Login</button>
                {message && <p id="message" className="message">{message}</p>}
                {error && <p id="error" className="error">{error}</p>}
            </div>
        </main>
    );
}
