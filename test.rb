#!/usr/bin/env ruby

require 'socket'

UDPSocket.new.send('test:1|c', 0, 'localhost', '8125')
