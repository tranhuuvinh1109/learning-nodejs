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
}

export default new PhoneController();
