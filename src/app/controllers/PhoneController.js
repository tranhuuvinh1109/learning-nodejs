import Phone from "../models/PhoneModel.js";

class PhoneController {
    async createNewPhone(req, res) {
        try {
            if (req.body) {
                const phone = new Phone(req.body);
                await phone.save()
                    .then(() => res.status(200).json({ message: 'created successfully', data: phone }))
                    .catch(() => res.status(404).json({ message: 'error' }));
            } else {
                res.status(404).json({ message: 'error' });
            }
        } catch (error) {
            res.status(500).json({ message: 'error' });
        }
    }

    async getAllPhone(req, res) {
        try {
            const allPhones = await Phone.find();
            if (allPhones) {
                res.status(200).json({ message: 'data exist', data: allPhones });
            } else {
                res.status(404).json({ message: 'error' });
            }
        } catch {
            res.status(500).json({ message: 'error' });
        }
    }

    async getPhoneById(req, res) {
        try {
            const phoneId = req.params.id;
            const phone = await Phone.findById(phoneId);

            if (!phone) {
                return res.status(404).json({ message: 'phone not found' });
            }

            res.status(200).json({ message: 'phone found', data: phone });

        } catch (error) {
            res.status(500).json({ message: 'error' });
        }
    }

    async getPhoneByName(req, res) {
        try {
            const username = req.params.name;
            const phone = await Phone.findOne({ name: username });

            if (!phone) {
                return res.status(404).json({ message: 'phone not found' });
            }

            res.status(200).json({ message: 'phone found', data: phone });

        } catch (error) {
            res.status(500).json({ message: 'error' });
        }
    }

    async updatePhoneById(req, res) {
        try {
            const phoneId = req.params.id; // Lấy ID từ tham số động
            const updateData = req.body; // Dữ liệu cập nhật từ body của yêu cầu

            // Sử dụng findOneAndUpdate để cập nhật thông tin điện thoại
            const updatedPhone = await Phone.findOneAndUpdate({ _id: phoneId }, updateData, { new: true });

            if (!updatedPhone) {
                return res.status(400).json({ message: 'Phone not exist' });
            }

            return res.status(200).json({ message: 'Phone updated successfully', data: updatedPhone });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    async updatePhoneByName(req, res) {
        try {
            const name = req.params.name; // Lấy ID từ tham số động
            const updateData = req.body; // Dữ liệu cập nhật từ body của yêu cầu

            // Sử dụng findOneAndUpdate để cập nhật thông tin điện thoại
            const updatedPhone = await Phone.findOneAndUpdate({ name: name }, updateData, { new: true });

            if (!updatedPhone) {
                return res.status(400).json({ message: 'Phone not exist' });
            }

            return res.status(200).json({ message: 'Phone updated successfully', data: updatedPhone });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    async deletePhoneById(req, res) {
        try {
            const phoneId = req.params.id; // Lấy ID từ tham số động

            // Sử dụng findOneAndDelete để xóa điện thoại
            const deletedPhone = await Phone.findOneAndDelete({ _id: phoneId });

            if (!deletedPhone) {
                return res.status(400).json({ message: 'Phone not exist' });
            }

            return res.status(200).json({ message: 'Phone deleted successfully', data: deletedPhone });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    async deletePhoneByName(req, res) {
        try {
            const name = req.params.name; // Lấy ID từ tham số động

            // Sử dụng findOneAndDelete để xóa điện thoại
            const deletedPhone = await Phone.findOneAndDelete({ name: name });

            if (!deletedPhone) {
                return res.status(400).json({ message: 'Phone not exist' });
            }

            return res.status(200).json({ message: 'Phone deleted successfully', data: deletedPhone });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }



}

export default new PhoneController();
