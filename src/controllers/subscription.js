/* eslint-disable arrow-body-style */
const Subscription = require('../models/subscription');

const createSubs = (req, res) => {
  Subscription.create(
    req.body,
  ).then((result) => res.status(201).json(result))
    .catch((error) => res.status(400).json({ message: 'Invalid request: incorrect parameters provided!', error }));
};

const deleteSubs = (req, res) => {
  const { id } = req.params;
  Subscription.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          msg: `Member with ${id} not found`,
        });
      }
      return res.status(200).json({
        message: 'User deleted',
      });
    })
    .catch((error) => res.status(400).json({ message: 'Invalid request: incorrect parameters provided!', error }));
};

const getAllSubs = (req, res) => {
  Subscription.find()
    .then((subscriptions) => {
      return res.status(200).json({
        message: 'All subscriptions list',
        data: subscriptions,
        error: false,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: 'Internal error',
        error,
      });
    });
};

const getSubById = (req, res) => {
  const { id } = req.params;

  Subscription.findById(id)
    .then((subscription) => {
      if (res.data == null) {
        return res.status(404).json({
          message: 'Subscription not found',
          data: undefined,
        });
      }
      return res.status(200).json({
        message: 'Subscription found',
        data: subscription,
        error: false,
      });
    })
    .catch((error) => {
      return res.json({
        message: 'Internal error',
        error,
      });
    });
};

const updateSub = (req, res) => {
  const { id } = req.params;
  const { classes, members, date } = req.body;

  Subscription.findByIdAndUpdate(
    id,
    {
      classes,
      members,
      date,
    },
    { new: true },
  )
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          message: `${id} Subscription was not found`,
        });
      }
      return res.status(200).json(result);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
};

module.exports = {
  getAllSubs,
  getSubById,
  updateSub,
  createSubs,
  deleteSubs,
};
