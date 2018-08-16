const express = require('express');

const router = express.Router();

router.get("/list", (req, res) => {
    res.json({
        users: [
            {
                id: 1,
                name: 'blah'
            }, {
                id: 2,
                name: 'blah2'
            }
        ]
    })
});

router.get("/:id", (req, res) => {
    res.json({
        user: {
            id: req.params.id,
            name: 'blah'
        }

    })
})

module.exports = router;