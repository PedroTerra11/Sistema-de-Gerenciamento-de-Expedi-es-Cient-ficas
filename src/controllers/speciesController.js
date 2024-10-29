import Species from "../models/species_model.js";

export const store = async (req, res) => {
    try {
        const species = await Species.create(req.body);
        res.status(201).json(species);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const index = async (req, res) => {
    try {
        const speciesList = await Species.find().exec();
        res.json(speciesList);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const show = async (req, res) => {
    try {
        const species = await Species.findById(req.params.id).exec();
        res.json(species);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const update = async (req, res) => {
    try {
        const species = await Species.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
        res.json(species);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const destroy = async (req, res) => {
    try {
        const species = await Species.findByIdAndDelete(req.params.id).exec();
        res.json(species);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
