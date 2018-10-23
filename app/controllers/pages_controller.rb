class PagesController < ApplicationController
  def home
    refresh_gigs
    @coming_gigs = Gig.where(passed: 'false').sort_by { |gig| gig.date }

    require 'json'
    require 'open-uri'

    url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=192154330.54149b3.576a8210da384d2bb0a2471965dc7b47'
    response_serialized = open(url).read
    response = JSON.parse(response_serialized)
    @instagrams = []
    clean_response = response["data"]
    clean_response.each do |image|
      @instagrams << image["images"]["standard_resolution"]["url"]
    end
  end

end
