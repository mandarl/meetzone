#!/usr/bin/python
from pytz import timezone
tz = timezone("Europe/Paris")
print tz._utc_transition_times