import User from '../models/userModel.js';

// Create New Users
export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(404).json({ message: "All fields are required." });
        };

        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "User already exist" });
        };

        const user = await User.create({ name, email, password });
        // await user.save();

        return res.status(200).json({ message: "User created successfully", user });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
};

// Get All Users
export const allUsers = async (req, res) => {
    try {
        const users = await User.find({});

        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
};

// Get Single User
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        };

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
};

// Update User
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(400).json({ message: "User not found" });
        };

        return res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await User.findByIdAndDelete(id);
        if (!deleteUser) {
            return res.status(400).json({ message: "User not found" });
        };

        return res.status(200).json({ message: "User Deleted Successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
}