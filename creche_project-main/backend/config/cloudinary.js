import cloudinary from 'cloudinary'; // Import the entire Cloudinary module
const { v2: cloudinaryV2 } = cloudinary; 

const connectCloudinary = async () => {

    cloudinaryV2.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_SECRET_KEY
    })

}

export default connectCloudinary;