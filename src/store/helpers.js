import moment from "moment";

export const formatandoData = function(data) {
  return moment(
    new Date(data),
    ["ddd MMM DD YYYY HH:mm:ss Z+HHmm"],
    "pt-br",
    true
  ).fromNow();
};
