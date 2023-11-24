function initiateAuthorization(req, res){
    const clientId = '1a0b7eebe69748f3ab323a3efa936613';
    const redirectUri = 'http://localhost:3500/spotify/callback';
    const scopes = 'user-read-private user-read-email';
    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scopes)}`;
    res.redirect(url);
    // window.location.href = url;
  }

async function handleCallback(req, res){
    const code = req.query.code || null;
}

module.exports = {initiateAuthorization, handleCallback};