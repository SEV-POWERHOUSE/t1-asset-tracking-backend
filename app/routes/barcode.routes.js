module.exports = (app) => {
    const barcode = require("../controllers/barcode.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();
  
    // Create a new Barcode
    router.post("/", [authenticate], barcode.createBarcode);
  
    // Retrieve all Barcodes
    router.get("/", [authenticate], barcode.getAllBarcodes);
  
    // Retrieve a single Barcode by barcodeId
    router.get("/:barcodeId", [authenticate], barcode.getBarcodeById);
  
    // Update a Barcode by barcodeId
    router.put("/:barcodeId", [authenticate], barcode.updateBarcode);
  
    // Delete a Barcode by barcodeId
    router.delete("/:barcodeId", [authenticate], barcode.deleteBarcode);
  
    // Delete all Barcodes
    router.delete("/", [authenticate], barcode.deleteAllBarcodes);
  
    app.use("/asset-t1/barcode", router);
  };
  