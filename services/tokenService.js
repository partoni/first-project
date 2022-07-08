const jwt = require('jsonwebtoken');
const {Token} = require('../models/models');

class TokenService {
    generateTokens(payload) {
        
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '60h'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
        console.log('generateTokens-----'+accessToken)
        console.log('refreshTokens-----'+refreshToken)
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            console.log('validateAccessToken -----token');
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            console.log('userData-------'+userData);
            return userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({where:{userId}})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await Token.create({userId, refreshToken})
        return token;
    }

    async removeToken(refreshToken) {
        const tokenData = await Token.deleteOne({refreshToken})
        return tokenData;
    }

    async findToken(refreshToken) {
        const tokenData = await Token.findOne({refreshToken})
        return tokenData;
    }
}

module.exports = new TokenService();