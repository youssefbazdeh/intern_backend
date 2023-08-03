import path from "path";
import multer from "../middlewares/multer.js";
import fs from "fs";
import internship from "../models/internship.js";
import enumType from "../models/enumType.js";

// add internship by student
export const add = async (req, res) => {
  try {
    const { type } = req.body;
    const { reportFile, attestationFile, journalFile } = req.files;
    const mark = null;
    const isValidated = false;

    const newInternship = new internship({
      reportFile: {
        data: fs.readFileSync(reportFile[0].path),
        contentType: reportFile[0].mimetype,
      },
      attestationFile: {
        data: fs.readFileSync(attestationFile[0].path),
        contentType: attestationFile[0].mimetype,
      },
      journalFile: {
        data: fs.readFileSync(journalFile[0].path),
        contentType: journalFile[0].mimetype,
      },
      mark,
      isValidated,
      type,
    });

    const savedInternship = await newInternship.save();

    res.json(savedInternship);
  } catch (error) {
    console.error("Error adding internship:", error);
    res.status(500).json({ error: "Error adding internship" });
  }
};

// update internship by professor
export const updateInternship = async (req, res) => {
  try {
    const { id } = req.params;
    const { mark, isValidated } = req.body;

    const updatedFields = {};

    if (mark !== undefined) {
      updatedFields.mark = mark;
    }

    if (isValidated !== undefined) {
      updatedFields.isValidated = isValidated;
    }

    const updatedInternship = await internship.findByIdAndUpdate(
      id,
      { $set: updatedFields },
      { new: true }
    );

    if (!updatedInternship) {
      return res.status(404).json({ error: "Internship not found" });
    }

    res.json(updatedInternship);
  } catch (error) {
    console.error("Error updating internship:", error);
    res.status(500).json({ error: "Error updating internship" });
  }
};

// show all internships
export const getAllInternships = async (req, res) => {
  try {
    const internships = await internship.find();
    res.json(internships);
  } catch (error) {
    console.error("Error fetching internships:", error);
    res.status(500).json({ error: "Error fetching internships" });
  }
};


// show internship by Id
export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundInternship = await internship.findById(id);
    
    if (!foundInternship) {
      return res.status(404).json({ error: "Internship not found" });
    }
    
    res.json(foundInternship);
  } catch (error) {
    console.error("Error fetching internship by ID:", error);
    res.status(500).json({ error: "Error fetching internship by ID" });
  }
};
