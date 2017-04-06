/**
 * Created by S on 6.04.2017.
 */

export default function getBaseUrl() {
    const inDevelopment = window.location.hostname === 'localhost';
    return inDevelopment ? 'http://localhost:3001/' : '/';
}
