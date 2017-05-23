#!/usr/bin/env ruby

require 'socket'

loop do
  metric = 'louis-test:1|c'
  puts "Sending #{metric}"
  UDPSocket.new.send(metric, 0, 'localhost', '8125')
  sleep 1
end
