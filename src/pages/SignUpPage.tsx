import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Form, Input, Button, Alert, Typography, Card } from 'antd';

const { Title } = Typography;

function SignUpPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { signup } = useAuth();

  const handleFormSubmit = async () => {
    setError('');
    setLoading(true);

    try {
      console.log('Attempting signup with:', email);
      await signup(email, password);
      console.log('Sign up successful!');
      setEmail('');
      setPassword('');
    } catch (err: unknown) {
      console.error('Sign up failed:', err);
      const errorMessage =
        err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to create an account: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card style={{ maxWidth: 400, margin: '20px auto' }}>
      <Title level={3} style={{ textAlign: 'center' }}>
        Sign Up
      </Title>
      {error && (
        <Alert
          message={error}
          type="error"
          showIcon
          style={{ marginBottom: '20px' }}
        />
      )}
      <Form
        // form={form} // Assign form instance if used
        layout="vertical" // Common layout: labels above inputs
        onFinish={handleFormSubmit} // Use onFinish for submission handling
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email" // Required for Form state management and rules
          rules={[
            { required: true, message: 'Please input your Email!' },
            { type: 'email', message: 'Please enter a valid Email!' },
          ]}
        >
          <Input
            type="email"
            value={email} // Bind state value
            onChange={(e) => setEmail(e.target.value)} // Update state on change
            placeholder="Enter your email"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please input your Password!' },
            { min: 6, message: 'Password must be at least 6 characters long!' },
          ]}
        >
          <Input.Password // Specific component for passwords (hides input)
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </Form.Item>

        <Form.Item>
          {/* Ant Design Button handles loading state nicely */}
          <Button type="primary" htmlType="submit" loading={loading} block>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default SignUpPage;
