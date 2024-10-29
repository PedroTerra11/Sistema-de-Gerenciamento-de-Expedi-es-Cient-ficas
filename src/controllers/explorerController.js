import Explorer from "../models/explorers_model.js";

export const store = async (req, res) => {
    try {
        const explorer = await Explorer.create(req.body);
        res.status(201).json(explorer);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const index = async (req, res) => {
    try {
        const explorers = await Explorer.find().exec();
        res.json(explorers);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const show = async (req, res) => {
    try {
        const explorer = await Explorer.findById(req.params.id).populate('speciesFound').exec();
        res.json(explorer);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const update = async (req, res) => {
    try {
        const explorer = await Explorer.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
        res.json(explorer);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const destroy = async (req, res) => {
    try {
        const explorer = await Explorer.findByIdAndDelete(req.params.id).exec();
        res.json(explorer);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
